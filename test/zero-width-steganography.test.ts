import { describe, it, expect } from "vitest";
import * as zws from "../src";

describe("zero-width-steganography", () => {
  it("should encode and decode text", () => {
    const text = "Hello, World!";
    const hide = Math.random().toString(36).slice(2);
    const encoded = zws.encodeText(text, hide);
    const decoded = zws.decodeText(encoded);
    expect(decoded.original).toBe(text);
    expect(decoded.hidden).toBe(hide);
  });

  it("should encode and decode binary data", () => {
    const text = "Hello, World!";
    const data = new Uint8Array([1, 2, 3, 4, 5]);
    const encoded = zws.encodeBinary(text, data);
    const decoded = zws.decodeBinary(encoded);
    expect(decoded.original).toBe(text);
    expect(decoded.hidden).toEqual(data);
  });

  it("should encode and decode text with custom characters", () => {
    const text = "Hello, World!";
    const hide = "secret";
    zws.setCharSet(["\u200c", "\u200d", "\u202c", "\ufeff", "\u200b"]);
    const encoded = zws.encodeText(text, hide);
    const decoded = zws.decodeText(encoded);
    expect(decoded.original).toBe(text);
    expect(decoded.hidden).toBe(hide);
  })

  it("should encode and decode text with full characters", () => {
    const text = "Hello, World!";
    const hide = "secret";
    zws.setCharSet(zws.ZW_CHARACTERS.map((c) => c.character));
    const encoded = zws.encodeText(text, hide);
    const decoded = zws.decodeText(encoded);
    expect(decoded.original).toBe(text);
    expect(decoded.hidden).toBe(hide);
  })
});
