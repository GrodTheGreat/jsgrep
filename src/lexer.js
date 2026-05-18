"use strict";

/**
 * @readonly
 * @enum {string}
 */
export const TokenType = {
  EOF: "eof",
  CHARACTER: "character",
};

/**
 * @typedef {object} Token
 * @property {TokenType} tokenType
 * @property {string} lexeme
 */

/**
 * @returns {Token}
 */
export function eof() {
  return {
    tokenType: TokenType.EOF,
    lexeme: "",
  };
}

/**
 * @param {string} lexeme
 * @returns {Token}
 */
export function character(lexeme) {
  return {
    tokenType: TokenType.CHARACTER,
    lexeme,
  };
}

/**
 * @typedef {object} Lexer
 * @property {function(): Token[]} scan
 */

/**
 * @param {string} pattern
 * @returns {Lexer}
 */
export function createBasicGrammarLexer(pattern) {
  /** @type {Token[]} */
  const tokens = [];
  let current = 0;

  const scan = () => {
    while (!isAtEnd()) {
      tokens.push(character(pattern[current]));
      current++;
    }
    tokens.push(eof());
    return tokens;
  };

  const isAtEnd = () => {
    return current >= pattern.length;
  };

  return { scan };
}

/**
 * @param {string} pattern
 * @returns {Lexer}
 */
export function createExtendedGrammarLexer(pattern) {
  /** @type {Token[]} */
  const tokens = [];
  let current = 0;

  const scan = () => {
    while (!isAtEnd()) {
      tokens.push(character(pattern[current]));
      current++;
    }
    tokens.push(eof());
    return tokens;
  };

  const isAtEnd = () => {
    return current >= pattern.length;
  };
  return { scan };
}
