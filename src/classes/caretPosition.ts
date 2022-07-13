import v from 'voca';

class CaretPosition {
  /**
   * Вычислить позицию каретки при перемещении влево.
   *
   * @param currentPosition
   * @param text
   */
  static toLeft(currentPosition: number, text: string) {
    // Получаем символ слева
    const char = this.getLastChar(text.slice(0, currentPosition));
    if (currentPosition > char.length) {
      return currentPosition - char.length;
    } else {
      return 0;
    }
  }

  /**
   * Вычислить позицию каретки при перемещении вправо.
   *
   * @param currentPosition
   * @param text
   */
  static toRight(currentPosition: number, text: string) {
    // Получаем символ справа
    const char = v.chain(text.slice(currentPosition)).graphemeAt(0).value();
    const newPosition = currentPosition + char.length;
    if (newPosition < text.length) {
      return newPosition;
    } else {
      return text.length;
    }
  }

  /**
   * Вычислить позицию каретки при перемещении вверх.
   *
   * @param currentPosition
   * @param text
   */
  static toTop(currentPosition: number, text: string) {
    // Получаем массив строк от начала до текущей позиции с усечением последней строки
    const lines = text.slice(0, currentPosition).split('\n');
    if (lines.length > 1) {
      // Получить подстроку и количество символов в подстроке для текущей строки
      const [currentSubstring, currentCountChars] = this.getSubstringFromArray(lines, lines.length - 1);

      // Следующая строка на которую требуется перейти и количество символов в следующей строке
      const [nextLine, nextLineChars] = this.getSubstringFromArray(lines, lines.length - 2, lines.length - 1);

      // Позиция в конце следующей строки
      const nextLineNullPosition = currentPosition - currentSubstring.length - 1;
      if (currentCountChars < nextLineChars) {
        // Если в текущей строке символов меньше чем в следующей,
        // то в следующей строке сместить курсор на количество символов текущей строки
        return nextLineNullPosition - nextLine.length + this.getCharArray(nextLine, 0, currentCountChars).length;
      } else {
        // Иначе установить курсор в конец следующей строки
        return nextLineNullPosition;
      }
    }
    return 0;
  }

  /**
   * Вычислить позицию каретки при перемещении вниз.
   *
   * @param currentPosition
   * @param text
   */
  static toBottom(currentPosition: number, text: string) {
    // Получаем массив строк от начала до текущей позиции с усечением последней строки
    const lines = text.slice(0, currentPosition).split('\n');
    // Получаем массив из всех строк
    const splitLines = text.split('\n');

    if (lines.length < splitLines.length) {
      // Получить подстроку и количество символов в подстроке для текущей строки
      const [currentSubstring, currentCountChars] = this.getSubstringFromArray(lines, lines.length - 1);

      // Текущая строка (вся)
      const [currentLine] = splitLines.slice(lines.length - 1, lines.length);

      // Следующая строка на которую требуется перейти и количество символов в следующей строке
      const [nextLine, nextLineChars] = this.getSubstringFromArray(splitLines, lines.length, lines.length + 1);

      // Позиция в начале следующей строки
      const nextLineNullPosition = currentPosition - currentSubstring.length + currentLine.length + 1;
      if (currentCountChars < nextLineChars) {
        // Если в текущей строке символов меньше чем в следующей,
        // то в следующей строке сместить курсор на количество символов текущей строки
        return nextLineNullPosition + this.getCharArray(nextLine, 0, currentCountChars).length;
      } else {
        // Иначе установить курсор в конец следующей строки
        return nextLineNullPosition + nextLine.length;
      }
    }
    return text.length;
  }

  /**
   * Вернуть картеж из подстроки элемента массива и количества символов в подстроке.
   *
   * @param arr
   * @param start
   * @param end
   */
  private static getSubstringFromArray(arr: string[], start: number, end?: number): [string, number] {
    // Подстрока
    const [substring] = arr.slice(start, end);
    // Количество символов в подстроке
    const countChars = v.countGraphemes(substring);
    return [substring, countChars];
  }

  /**
   * Получить подстроку из строки.
   *
   * @param text
   * @param start
   * @param end
   */
  static getCharArray(text: string, start: number, end?: number) {
    return v.graphemes(text).slice(start, end).join('');
  }

  /**
   * Получить последний символ.
   *
   * @param text
   */
  static getLastChar(text: string): string {
    const char = v.chain(text).reverseGrapheme().graphemeAt(0).value();
    return char;
  }
}

export default CaretPosition;
