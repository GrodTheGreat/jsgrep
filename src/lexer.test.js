"use strict";
import {
  createBasicGrammarLexer,
  createExtendedGrammarLexer,
  TokenType,
  eof,
  character,
} from "./lexer.js";

describe("tokens", () => {
  test("eof token", () => {
    expect(eof()).toEqual({ tokenType: TokenType.EOF, lexeme: "" });
  });

  test("character token", () => {
    expect(character("a")).toEqual({ tokenType: TokenType.CHARACTER, lexeme: "a" });
  });
});

describe("basic regex lexer", () => {
  test("basic lexer scans empty patterns", () => {
    const lexer = createBasicGrammarLexer("");
    const result = lexer.scan();
    expect(result).toEqual([eof()]);
  });

  test("basic lexer scans literal characters", () => {
    let lexer = createBasicGrammarLexer("abc");
    let result = lexer.scan();
    expect(result).toEqual([character("a"), character("b"), character("c"), eof()]);

    lexer = createBasicGrammarLexer("123");
    result = lexer.scan();
    expect(result).toEqual([character("1"), character("2"), character("3"), eof()]);
  });
});

describe("extended regex lexer", () => {
  test("extended lexer scans empty patterns", () => {
    const lexer = createExtendedGrammarLexer("");
    const result = lexer.scan();
    expect(result).toEqual([eof()]);
  });

  test("extended lexer scans literal characters", () => {
    let lexer = createExtendedGrammarLexer("abc");
    let result = lexer.scan();
    expect(result).toEqual([character("a"), character("b"), character("c"), eof()]);

    lexer = createExtendedGrammarLexer("123");
    result = lexer.scan();
    expect(result).toEqual([character("1"), character("2"), character("3"), eof()]);
  });
});
