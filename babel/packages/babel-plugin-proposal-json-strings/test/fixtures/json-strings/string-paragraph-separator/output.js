expect("\u2029".length).toBe(1);
expect("\u2029").toBe("\u2029");
expect("before\u2029after".length).toBe(12);
expect("before\u2029after").toBe("before\u2029after"); //            ^ That's a U+2029 PARAGRAPH SEPARATOR UTF-16 char (between 'before' and 'after')

expect("\u2029".length).toBe(1);
expect("\u2029").toBe("\u2029"); //      ^ That's a U+2029 PARAGRAPH SEPARATOR UTF-16 char

expect("\ ".length).toBe(0);
expect("\ ").toBe(""); //       ^ That's a U+2029 PARAGRAPH SEPARATOR UTF-16 char

expect("\\\u2029".length).toBe(2);
expect("\\\u2029").toBe("\\\u2029"); //        ^ That's a U+2029 PARAGRAPH SEPARATOR UTF-16 char

expect("\\\ ".length).toBe(1);
expect("\\\ ").toBe("\\"); //         ^ That's a U+2029 PARAGRAPH SEPARATOR UTF-16 char

expect("\\\\\u2029".length).toBe(3);
expect("\\\\\u2029").toBe("\\\\\u2029"); //          ^ That's a U+2029 PARAGRAPH SEPARATOR UTF-16 char
