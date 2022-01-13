'use strict';

const { range } = require('./util');

/**
 * A.1 Unassigned code points in Unicode 3.2
 * @link https://tools.ietf.org/html/rfc3454#appendix-A.1
 */
const unassigned_code_points = new Set([
  0x0221,
  ...range(0x0234, 0x024f),
  ...range(0x02ae, 0x02af),
  ...range(0x02ef, 0x02ff),
  ...range(0x0350, 0x035f),
  ...range(0x0370, 0x0373),
  ...range(0x0376, 0x0379),
  ...range(0x037b, 0x037d),
  ...range(0x037f, 0x0383),
  0x038b,
  0x038d,
  0x03a2,
  0x03cf,
  ...range(0x03f7, 0x03ff),
  0x0487,
  0x04cf,
  ...range(0x04f6, 0x04f7),
  ...range(0x04fa, 0x04ff),
  ...range(0x0510, 0x0530),
  ...range(0x0557, 0x0558),
  0x0560,
  0x0588,
  ...range(0x058b, 0x0590),
  0x05a2,
  0x05ba,
  ...range(0x05c5, 0x05cf),
  ...range(0x05eb, 0x05ef),
  ...range(0x05f5, 0x060b),
  ...range(0x060d, 0x061a),
  ...range(0x061c, 0x061e),
  0x0620,
  ...range(0x063b, 0x063f),
  ...range(0x0656, 0x065f),
  ...range(0x06ee, 0x06ef),
  0x06ff,
  0x070e,
  ...range(0x072d, 0x072f),
  ...range(0x074b, 0x077f),
  ...range(0x07b2, 0x0900),
  0x0904,
  ...range(0x093a, 0x093b),
  ...range(0x094e, 0x094f),
  ...range(0x0955, 0x0957),
  ...range(0x0971, 0x0980),
  0x0984,
  ...range(0x098d, 0x098e),
  ...range(0x0991, 0x0992),
  0x09a9,
  0x09b1,
  ...range(0x09b3, 0x09b5),
  ...range(0x09ba, 0x09bb),
  0x09bd,
  ...range(0x09c5, 0x09c6),
  ...range(0x09c9, 0x09ca),
  ...range(0x09ce, 0x09d6),
  ...range(0x09d8, 0x09db),
  0x09de,
  ...range(0x09e4, 0x09e5),
  ...range(0x09fb, 0x0a01),
  ...range(0x0a03, 0x0a04),
  ...range(0x0a0b, 0x0a0e),
  ...range(0x0a11, 0x0a12),
  0x0a29,
  0x0a31,
  0x0a34,
  0x0a37,
  ...range(0x0a3a, 0x0a3b),
  0x0a3d,
  ...range(0x0a43, 0x0a46),
  ...range(0x0a49, 0x0a4a),
  ...range(0x0a4e, 0x0a58),
  0x0a5d,
  ...range(0x0a5f, 0x0a65),
  ...range(0x0a75, 0x0a80),
  0x0a84,
  0x0a8c,
  0x0a8e,
  0x0a92,
  0x0aa9,
  0x0ab1,
  0x0ab4,
  ...range(0x0aba, 0x0abb),
  0x0ac6,
  0x0aca,
  ...range(0x0ace, 0x0acf),
  ...range(0x0ad1, 0x0adf),
  ...range(0x0ae1, 0x0ae5),
  ...range(0x0af0, 0x0b00),
  0x0b04,
  ...range(0x0b0d, 0x0b0e),
  ...range(0x0b11, 0x0b12),
  0x0b29,
  0x0b31,
  ...range(0x0b34, 0x0b35),
  ...range(0x0b3a, 0x0b3b),
  ...range(0x0b44, 0x0b46),
  ...range(0x0b49, 0x0b4a),
  ...range(0x0b4e, 0x0b55),
  ...range(0x0b58, 0x0b5b),
  0x0b5e,
  ...range(0x0b62, 0x0b65),
  ...range(0x0b71, 0x0b81),
  0x0b84,
  ...range(0x0b8b, 0x0b8d),
  0x0b91,
  ...range(0x0b96, 0x0b98),
  0x0b9b,
  0x0b9d,
  ...range(0x0ba0, 0x0ba2),
  ...range(0x0ba5, 0x0ba7),
  ...range(0x0bab, 0x0bad),
  0x0bb6,
  ...range(0x0bba, 0x0bbd),
  ...range(0x0bc3, 0x0bc5),
  0x0bc9,
  ...range(0x0bce, 0x0bd6),
  ...range(0x0bd8, 0x0be6),
  ...range(0x0bf3, 0x0c00),
  0x0c04,
  0x0c0d,
  0x0c11,
  0x0c29,
  0x0c34,
  ...range(0x0c3a, 0x0c3d),
  0x0c45,
  0x0c49,
  ...range(0x0c4e, 0x0c54),
  ...range(0x0c57, 0x0c5f),
  ...range(0x0c62, 0x0c65),
  ...range(0x0c70, 0x0c81),
  0x0c84,
  0x0c8d,
  0x0c91,
  0x0ca9,
  0x0cb4,
  ...range(0x0cba, 0x0cbd),
  0x0cc5,
  0x0cc9,
  ...range(0x0cce, 0x0cd4),
  ...range(0x0cd7, 0x0cdd),
  0x0cdf,
  ...range(0x0ce2, 0x0ce5),
  ...range(0x0cf0, 0x0d01),
  0x0d04,
  0x0d0d,
  0x0d11,
  0x0d29,
  ...range(0x0d3a, 0x0d3d),
  ...range(0x0d44, 0x0d45),
  0x0d49,
  ...range(0x0d4e, 0x0d56),
  ...range(0x0d58, 0x0d5f),
  ...range(0x0d62, 0x0d65),
  ...range(0x0d70, 0x0d81),
  0x0d84,
  ...range(0x0d97, 0x0d99),
  0x0db2,
  0x0dbc,
  ...range(0x0dbe, 0x0dbf),
  ...range(0x0dc7, 0x0dc9),
  ...range(0x0dcb, 0x0dce),
  0x0dd5,
  0x0dd7,
  ...range(0x0de0, 0x0df1),
  ...range(0x0df5, 0x0e00),
  ...range(0x0e3b, 0x0e3e),
  ...range(0x0e5c, 0x0e80),
  0x0e83,
  ...range(0x0e85, 0x0e86),
  0x0e89,
  ...range(0x0e8b, 0x0e8c),
  ...range(0x0e8e, 0x0e93),
  0x0e98,
  0x0ea0,
  0x0ea4,
  0x0ea6,
  ...range(0x0ea8, 0x0ea9),
  0x0eac,
  0x0eba,
  ...range(0x0ebe, 0x0ebf),
  0x0ec5,
  0x0ec7,
  ...range(0x0ece, 0x0ecf),
  ...range(0x0eda, 0x0edb),
  ...range(0x0ede, 0x0eff),
  0x0f48,
  ...range(0x0f6b, 0x0f70),
  ...range(0x0f8c, 0x0f8f),
  0x0f98,
  0x0fbd,
  ...range(0x0fcd, 0x0fce),
  ...range(0x0fd0, 0x0fff),
  0x1022,
  0x1028,
  0x102b,
  ...range(0x1033, 0x1035),
  ...range(0x103a, 0x103f),
  ...range(0x105a, 0x109f),
  ...range(0x10c6, 0x10cf),
  ...range(0x10f9, 0x10fa),
  ...range(0x10fc, 0x10ff),
  ...range(0x115a, 0x115e),
  ...range(0x11a3, 0x11a7),
  ...range(0x11fa, 0x11ff),
  0x1207,
  0x1247,
  0x1249,
  ...range(0x124e, 0x124f),
  0x1257,
  0x1259,
  ...range(0x125e, 0x125f),
  0x1287,
  0x1289,
  ...range(0x128e, 0x128f),
  0x12af,
  0x12b1,
  ...range(0x12b6, 0x12b7),
  0x12bf,
  0x12c1,
  ...range(0x12c6, 0x12c7),
  0x12cf,
  0x12d7,
  0x12ef,
  0x130f,
  0x1311,
  ...range(0x1316, 0x1317),
  0x131f,
  0x1347,
  ...range(0x135b, 0x1360),
  ...range(0x137d, 0x139f),
  ...range(0x13f5, 0x1400),
  ...range(0x1677, 0x167f),
  ...range(0x169d, 0x169f),
  ...range(0x16f1, 0x16ff),
  0x170d,
  ...range(0x1715, 0x171f),
  ...range(0x1737, 0x173f),
  ...range(0x1754, 0x175f),
  0x176d,
  0x1771,
  ...range(0x1774, 0x177f),
  ...range(0x17dd, 0x17df),
  ...range(0x17ea, 0x17ff),
  0x180f,
  ...range(0x181a, 0x181f),
  ...range(0x1878, 0x187f),
  ...range(0x18aa, 0x1dff),
  ...range(0x1e9c, 0x1e9f),
  ...range(0x1efa, 0x1eff),
  ...range(0x1f16, 0x1f17),
  ...range(0x1f1e, 0x1f1f),
  ...range(0x1f46, 0x1f47),
  ...range(0x1f4e, 0x1f4f),
  0x1f58,
  0x1f5a,
  0x1f5c,
  0x1f5e,
  ...range(0x1f7e, 0x1f7f),
  0x1fb5,
  0x1fc5,
  ...range(0x1fd4, 0x1fd5),
  0x1fdc,
  ...range(0x1ff0, 0x1ff1),
  0x1ff5,
  0x1fff,
  ...range(0x2053, 0x2056),
  ...range(0x2058, 0x205e),
  ...range(0x2064, 0x2069),
  ...range(0x2072, 0x2073),
  ...range(0x208f, 0x209f),
  ...range(0x20b2, 0x20cf),
  ...range(0x20eb, 0x20ff),
  ...range(0x213b, 0x213c),
  ...range(0x214c, 0x2152),
  ...range(0x2184, 0x218f),
  ...range(0x23cf, 0x23ff),
  ...range(0x2427, 0x243f),
  ...range(0x244b, 0x245f),
  0x24ff,
  ...range(0x2614, 0x2615),
  0x2618,
  ...range(0x267e, 0x267f),
  ...range(0x268a, 0x2700),
  0x2705,
  ...range(0x270a, 0x270b),
  0x2728,
  0x274c,
  0x274e,
  ...range(0x2753, 0x2755),
  0x2757,
  ...range(0x275f, 0x2760),
  ...range(0x2795, 0x2797),
  0x27b0,
  ...range(0x27bf, 0x27cf),
  ...range(0x27ec, 0x27ef),
  ...range(0x2b00, 0x2e7f),
  0x2e9a,
  ...range(0x2ef4, 0x2eff),
  ...range(0x2fd6, 0x2fef),
  ...range(0x2ffc, 0x2fff),
  0x3040,
  ...range(0x3097, 0x3098),
  ...range(0x3100, 0x3104),
  ...range(0x312d, 0x3130),
  0x318f,
  ...range(0x31b8, 0x31ef),
  ...range(0x321d, 0x321f),
  ...range(0x3244, 0x3250),
  ...range(0x327c, 0x327e),
  ...range(0x32cc, 0x32cf),
  0x32ff,
  ...range(0x3377, 0x337a),
  ...range(0x33de, 0x33df),
  0x33ff,
  ...range(0x4db6, 0x4dff),
  ...range(0x9fa6, 0x9fff),
  ...range(0xa48d, 0xa48f),
  ...range(0xa4c7, 0xabff),
  ...range(0xd7a4, 0xd7ff),
  ...range(0xfa2e, 0xfa2f),
  ...range(0xfa6b, 0xfaff),
  ...range(0xfb07, 0xfb12),
  ...range(0xfb18, 0xfb1c),
  0xfb37,
  0xfb3d,
  0xfb3f,
  0xfb42,
  0xfb45,
  ...range(0xfbb2, 0xfbd2),
  ...range(0xfd40, 0xfd4f),
  ...range(0xfd90, 0xfd91),
  ...range(0xfdc8, 0xfdcf),
  ...range(0xfdfd, 0xfdff),
  ...range(0xfe10, 0xfe1f),
  ...range(0xfe24, 0xfe2f),
  ...range(0xfe47, 0xfe48),
  0xfe53,
  0xfe67,
  ...range(0xfe6c, 0xfe6f),
  0xfe75,
  ...range(0xfefd, 0xfefe),
  0xff00,
  ...range(0xffbf, 0xffc1),
  ...range(0xffc8, 0xffc9),
  ...range(0xffd0, 0xffd1),
  ...range(0xffd8, 0xffd9),
  ...range(0xffdd, 0xffdf),
  0xffe7,
  ...range(0xffef, 0xfff8),
  ...range(0x10000, 0x102ff),
  0x1031f,
  ...range(0x10324, 0x1032f),
  ...range(0x1034b, 0x103ff),
  ...range(0x10426, 0x10427),
  ...range(0x1044e, 0x1cfff),
  ...range(0x1d0f6, 0x1d0ff),
  ...range(0x1d127, 0x1d129),
  ...range(0x1d1de, 0x1d3ff),
  0x1d455,
  0x1d49d,
  ...range(0x1d4a0, 0x1d4a1),
  ...range(0x1d4a3, 0x1d4a4),
  ...range(0x1d4a7, 0x1d4a8),
  0x1d4ad,
  0x1d4ba,
  0x1d4bc,
  0x1d4c1,
  0x1d4c4,
  0x1d506,
  ...range(0x1d50b, 0x1d50c),
  0x1d515,
  0x1d51d,
  0x1d53a,
  0x1d53f,
  0x1d545,
  ...range(0x1d547, 0x1d549),
  0x1d551,
  ...range(0x1d6a4, 0x1d6a7),
  ...range(0x1d7ca, 0x1d7cd),
  ...range(0x1d800, 0x1fffd),
  ...range(0x2a6d7, 0x2f7ff),
  ...range(0x2fa1e, 0x2fffd),
  ...range(0x30000, 0x3fffd),
  ...range(0x40000, 0x4fffd),
  ...range(0x50000, 0x5fffd),
  ...range(0x60000, 0x6fffd),
  ...range(0x70000, 0x7fffd),
  ...range(0x80000, 0x8fffd),
  ...range(0x90000, 0x9fffd),
  ...range(0xa0000, 0xafffd),
  ...range(0xb0000, 0xbfffd),
  ...range(0xc0000, 0xcfffd),
  ...range(0xd0000, 0xdfffd),
  0xe0000,
  ...range(0xe0002, 0xe001f),
  ...range(0xe0080, 0xefffd),
]);

/**
 * B.1 Commonly mapped to nothing
 * @link https://tools.ietf.org/html/rfc3454#appendix-B.1
 */
const commonly_mapped_to_nothing = new Set([
  0x00ad,
  0x034f,
  0x1806,
  0x180b,
  0x180c,
  0x180d,
  0x200b,
  0x200c,
  0x200d,
  0x2060,
  0xfe00,
  0xfe01,
  0xfe02,
  0xfe03,
  0xfe04,
  0xfe05,
  0xfe06,
  0xfe07,
  0xfe08,
  0xfe09,
  0xfe0a,
  0xfe0b,
  0xfe0c,
  0xfe0d,
  0xfe0e,
  0xfe0f,
  0xfeff,
]);

/**
 * C.1.2 Non-ASCII space characters
 * @link https://tools.ietf.org/html/rfc3454#appendix-C.1.2
 */
const non_ASCII_space_characters = new Set([
  0x00a0 /* NO-BREAK SPACE */,
  0x1680 /* OGHAM SPACE MARK */,
  0x2000 /* EN QUAD */,
  0x2001 /* EM QUAD */,
  0x2002 /* EN SPACE */,
  0x2003 /* EM SPACE */,
  0x2004 /* THREE-PER-EM SPACE */,
  0x2005 /* FOUR-PER-EM SPACE */,
  0x2006 /* SIX-PER-EM SPACE */,
  0x2007 /* FIGURE SPACE */,
  0x2008 /* PUNCTUATION SPACE */,
  0x2009 /* THIN SPACE */,
  0x200a /* HAIR SPACE */,
  0x200b /* ZERO WIDTH SPACE */,
  0x202f /* NARROW NO-BREAK SPACE */,
  0x205f /* MEDIUM MATHEMATICAL SPACE */,
  0x3000 /* IDEOGRAPHIC SPACE */,
]);

/**
 * 2.3.  Prohibited Output
 * @type {Set}
 */
const prohibited_characters = new Set([
  ...non_ASCII_space_characters,

  /**
   * C.2.1 ASCII control characters
   * @link https://tools.ietf.org/html/rfc3454#appendix-C.2.1
   */
  ...range(0, 0x001f) /* [CONTROL CHARACTERS] */,
  0x007f /* DELETE */,

  /**
   * C.2.2 Non-ASCII control characters
   * @link https://tools.ietf.org/html/rfc3454#appendix-C.2.2
   */
  ...range(0x0080, 0x009f) /* [CONTROL CHARACTERS] */,
  0x06dd /* ARABIC END OF AYAH */,
  0x070f /* SYRIAC ABBREVIATION MARK */,
  0x180e /* MONGOLIAN VOWEL SEPARATOR */,
  0x200c /* ZERO WIDTH NON-JOINER */,
  0x200d /* ZERO WIDTH JOINER */,
  0x2028 /* LINE SEPARATOR */,
  0x2029 /* PARAGRAPH SEPARATOR */,
  0x2060 /* WORD JOINER */,
  0x2061 /* FUNCTION APPLICATION */,
  0x2062 /* INVISIBLE TIMES */,
  0x2063 /* INVISIBLE SEPARATOR */,
  ...range(0x206a, 0x206f) /* [CONTROL CHARACTERS] */,
  0xfeff /* ZERO WIDTH NO-BREAK SPACE */,
  ...range(0xfff9, 0xfffc) /* [CONTROL CHARACTERS] */,
  ...range(0x1d173, 0x1d17a) /* [MUSICAL CONTROL CHARACTERS] */,

  /**
   * C.3 Private use
   * @link https://tools.ietf.org/html/rfc3454#appendix-C.3
   */
  ...range(0xe000, 0xf8ff) /* [PRIVATE USE, PLANE 0] */,
  ...range(0xf0000, 0xffffd) /* [PRIVATE USE, PLANE 15] */,
  ...range(0x100000, 0x10fffd) /* [PRIVATE USE, PLANE 16] */,

  /**
   * C.4 Non-character code points
   * @link https://tools.ietf.org/html/rfc3454#appendix-C.4
   */
  ...range(0xfdd0, 0xfdef) /* [NONCHARACTER CODE POINTS] */,
  ...range(0xfffe, 0xffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0x1fffe, 0x1ffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0x2fffe, 0x2ffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0x3fffe, 0x3ffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0x4fffe, 0x4ffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0x5fffe, 0x5ffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0x6fffe, 0x6ffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0x7fffe, 0x7ffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0x8fffe, 0x8ffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0x9fffe, 0x9ffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0xafffe, 0xaffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0xbfffe, 0xbffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0xcfffe, 0xcffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0xdfffe, 0xdffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0xefffe, 0xeffff) /* [NONCHARACTER CODE POINTS] */,
  ...range(0x10fffe, 0x10ffff) /* [NONCHARACTER CODE POINTS] */,

  /**
   * C.5 Surrogate codes
   * @link https://tools.ietf.org/html/rfc3454#appendix-C.5
   */
  ...range(0xd800, 0xdfff),

  /**
   * C.6 Inappropriate for plain text
   * @link https://tools.ietf.org/html/rfc3454#appendix-C.6
   */
  0xfff9 /* INTERLINEAR ANNOTATION ANCHOR */,
  0xfffa /* INTERLINEAR ANNOTATION SEPARATOR */,
  0xfffb /* INTERLINEAR ANNOTATION TERMINATOR */,
  0xfffc /* OBJECT REPLACEMENT CHARACTER */,
  0xfffd /* REPLACEMENT CHARACTER */,

  /**
   * C.7 Inappropriate for canonical representation
   * @link https://tools.ietf.org/html/rfc3454#appendix-C.7
   */
  ...range(0x2ff0, 0x2ffb) /* [IDEOGRAPHIC DESCRIPTION CHARACTERS] */,

  /**
   * C.8 Change display properties or are deprecated
   * @link https://tools.ietf.org/html/rfc3454#appendix-C.8
   */
  0x0340 /* COMBINING GRAVE TONE MARK */,
  0x0341 /* COMBINING ACUTE TONE MARK */,
  0x200e /* LEFT-TO-RIGHT MARK */,
  0x200f /* RIGHT-TO-LEFT MARK */,
  0x202a /* LEFT-TO-RIGHT EMBEDDING */,
  0x202b /* RIGHT-TO-LEFT EMBEDDING */,
  0x202c /* POP DIRECTIONAL FORMATTING */,
  0x202d /* LEFT-TO-RIGHT OVERRIDE */,
  0x202e /* RIGHT-TO-LEFT OVERRIDE */,
  0x206a /* INHIBIT SYMMETRIC SWAPPING */,
  0x206b /* ACTIVATE SYMMETRIC SWAPPING */,
  0x206c /* INHIBIT ARABIC FORM SHAPING */,
  0x206d /* ACTIVATE ARABIC FORM SHAPING */,
  0x206e /* NATIONAL DIGIT SHAPES */,
  0x206f /* NOMINAL DIGIT SHAPES */,

  /**
   * C.9 Tagging characters
   * @link https://tools.ietf.org/html/rfc3454#appendix-C.9
   */
  0xe0001 /* LANGUAGE TAG */,
  ...range(0xe0020, 0xe007f) /* [TAGGING CHARACTERS] */,
]);

/**
 * D.1 Characters with bidirectional property "R" or "AL"
 * @link https://tools.ietf.org/html/rfc3454#appendix-D.1
 */
const bidirectional_r_al = new Set([
  0x05be,
  0x05c0,
  0x05c3,
  ...range(0x05d0, 0x05ea),
  ...range(0x05f0, 0x05f4),
  0x061b,
  0x061f,
  ...range(0x0621, 0x063a),
  ...range(0x0640, 0x064a),
  ...range(0x066d, 0x066f),
  ...range(0x0671, 0x06d5),
  0x06dd,
  ...range(0x06e5, 0x06e6),
  ...range(0x06fa, 0x06fe),
  ...range(0x0700, 0x070d),
  0x0710,
  ...range(0x0712, 0x072c),
  ...range(0x0780, 0x07a5),
  0x07b1,
  0x200f,
  0xfb1d,
  ...range(0xfb1f, 0xfb28),
  ...range(0xfb2a, 0xfb36),
  ...range(0xfb38, 0xfb3c),
  0xfb3e,
  ...range(0xfb40, 0xfb41),
  ...range(0xfb43, 0xfb44),
  ...range(0xfb46, 0xfbb1),
  ...range(0xfbd3, 0xfd3d),
  ...range(0xfd50, 0xfd8f),
  ...range(0xfd92, 0xfdc7),
  ...range(0xfdf0, 0xfdfc),
  ...range(0xfe70, 0xfe74),
  ...range(0xfe76, 0xfefc),
]);

/**
 * D.2 Characters with bidirectional property "L"
 * @link https://tools.ietf.org/html/rfc3454#appendix-D.2
 */
const bidirectional_l = new Set([
  ...range(0x0041, 0x005a),
  ...range(0x0061, 0x007a),
  0x00aa,
  0x00b5,
  0x00ba,
  ...range(0x00c0, 0x00d6),
  ...range(0x00d8, 0x00f6),
  ...range(0x00f8, 0x0220),
  ...range(0x0222, 0x0233),
  ...range(0x0250, 0x02ad),
  ...range(0x02b0, 0x02b8),
  ...range(0x02bb, 0x02c1),
  ...range(0x02d0, 0x02d1),
  ...range(0x02e0, 0x02e4),
  0x02ee,
  0x037a,
  0x0386,
  ...range(0x0388, 0x038a),
  0x038c,
  ...range(0x038e, 0x03a1),
  ...range(0x03a3, 0x03ce),
  ...range(0x03d0, 0x03f5),
  ...range(0x0400, 0x0482),
  ...range(0x048a, 0x04ce),
  ...range(0x04d0, 0x04f5),
  ...range(0x04f8, 0x04f9),
  ...range(0x0500, 0x050f),
  ...range(0x0531, 0x0556),
  ...range(0x0559, 0x055f),
  ...range(0x0561, 0x0587),
  0x0589,
  0x0903,
  ...range(0x0905, 0x0939),
  ...range(0x093d, 0x0940),
  ...range(0x0949, 0x094c),
  0x0950,
  ...range(0x0958, 0x0961),
  ...range(0x0964, 0x0970),
  ...range(0x0982, 0x0983),
  ...range(0x0985, 0x098c),
  ...range(0x098f, 0x0990),
  ...range(0x0993, 0x09a8),
  ...range(0x09aa, 0x09b0),
  0x09b2,
  ...range(0x09b6, 0x09b9),
  ...range(0x09be, 0x09c0),
  ...range(0x09c7, 0x09c8),
  ...range(0x09cb, 0x09cc),
  0x09d7,
  ...range(0x09dc, 0x09dd),
  ...range(0x09df, 0x09e1),
  ...range(0x09e6, 0x09f1),
  ...range(0x09f4, 0x09fa),
  ...range(0x0a05, 0x0a0a),
  ...range(0x0a0f, 0x0a10),
  ...range(0x0a13, 0x0a28),
  ...range(0x0a2a, 0x0a30),
  ...range(0x0a32, 0x0a33),
  ...range(0x0a35, 0x0a36),
  ...range(0x0a38, 0x0a39),
  ...range(0x0a3e, 0x0a40),
  ...range(0x0a59, 0x0a5c),
  0x0a5e,
  ...range(0x0a66, 0x0a6f),
  ...range(0x0a72, 0x0a74),
  0x0a83,
  ...range(0x0a85, 0x0a8b),
  0x0a8d,
  ...range(0x0a8f, 0x0a91),
  ...range(0x0a93, 0x0aa8),
  ...range(0x0aaa, 0x0ab0),
  ...range(0x0ab2, 0x0ab3),
  ...range(0x0ab5, 0x0ab9),
  ...range(0x0abd, 0x0ac0),
  0x0ac9,
  ...range(0x0acb, 0x0acc),
  0x0ad0,
  0x0ae0,
  ...range(0x0ae6, 0x0aef),
  ...range(0x0b02, 0x0b03),
  ...range(0x0b05, 0x0b0c),
  ...range(0x0b0f, 0x0b10),
  ...range(0x0b13, 0x0b28),
  ...range(0x0b2a, 0x0b30),
  ...range(0x0b32, 0x0b33),
  ...range(0x0b36, 0x0b39),
  ...range(0x0b3d, 0x0b3e),
  0x0b40,
  ...range(0x0b47, 0x0b48),
  ...range(0x0b4b, 0x0b4c),
  0x0b57,
  ...range(0x0b5c, 0x0b5d),
  ...range(0x0b5f, 0x0b61),
  ...range(0x0b66, 0x0b70),
  0x0b83,
  ...range(0x0b85, 0x0b8a),
  ...range(0x0b8e, 0x0b90),
  ...range(0x0b92, 0x0b95),
  ...range(0x0b99, 0x0b9a),
  0x0b9c,
  ...range(0x0b9e, 0x0b9f),
  ...range(0x0ba3, 0x0ba4),
  ...range(0x0ba8, 0x0baa),
  ...range(0x0bae, 0x0bb5),
  ...range(0x0bb7, 0x0bb9),
  ...range(0x0bbe, 0x0bbf),
  ...range(0x0bc1, 0x0bc2),
  ...range(0x0bc6, 0x0bc8),
  ...range(0x0bca, 0x0bcc),
  0x0bd7,
  ...range(0x0be7, 0x0bf2),
  ...range(0x0c01, 0x0c03),
  ...range(0x0c05, 0x0c0c),
  ...range(0x0c0e, 0x0c10),
  ...range(0x0c12, 0x0c28),
  ...range(0x0c2a, 0x0c33),
  ...range(0x0c35, 0x0c39),
  ...range(0x0c41, 0x0c44),
  ...range(0x0c60, 0x0c61),
  ...range(0x0c66, 0x0c6f),
  ...range(0x0c82, 0x0c83),
  ...range(0x0c85, 0x0c8c),
  ...range(0x0c8e, 0x0c90),
  ...range(0x0c92, 0x0ca8),
  ...range(0x0caa, 0x0cb3),
  ...range(0x0cb5, 0x0cb9),
  0x0cbe,
  ...range(0x0cc0, 0x0cc4),
  ...range(0x0cc7, 0x0cc8),
  ...range(0x0cca, 0x0ccb),
  ...range(0x0cd5, 0x0cd6),
  0x0cde,
  ...range(0x0ce0, 0x0ce1),
  ...range(0x0ce6, 0x0cef),
  ...range(0x0d02, 0x0d03),
  ...range(0x0d05, 0x0d0c),
  ...range(0x0d0e, 0x0d10),
  ...range(0x0d12, 0x0d28),
  ...range(0x0d2a, 0x0d39),
  ...range(0x0d3e, 0x0d40),
  ...range(0x0d46, 0x0d48),
  ...range(0x0d4a, 0x0d4c),
  0x0d57,
  ...range(0x0d60, 0x0d61),
  ...range(0x0d66, 0x0d6f),
  ...range(0x0d82, 0x0d83),
  ...range(0x0d85, 0x0d96),
  ...range(0x0d9a, 0x0db1),
  ...range(0x0db3, 0x0dbb),
  0x0dbd,
  ...range(0x0dc0, 0x0dc6),
  ...range(0x0dcf, 0x0dd1),
  ...range(0x0dd8, 0x0ddf),
  ...range(0x0df2, 0x0df4),
  ...range(0x0e01, 0x0e30),
  ...range(0x0e32, 0x0e33),
  ...range(0x0e40, 0x0e46),
  ...range(0x0e4f, 0x0e5b),
  ...range(0x0e81, 0x0e82),
  0x0e84,
  ...range(0x0e87, 0x0e88),
  0x0e8a,
  0x0e8d,
  ...range(0x0e94, 0x0e97),
  ...range(0x0e99, 0x0e9f),
  ...range(0x0ea1, 0x0ea3),
  0x0ea5,
  0x0ea7,
  ...range(0x0eaa, 0x0eab),
  ...range(0x0ead, 0x0eb0),
  ...range(0x0eb2, 0x0eb3),
  0x0ebd,
  ...range(0x0ec0, 0x0ec4),
  0x0ec6,
  ...range(0x0ed0, 0x0ed9),
  ...range(0x0edc, 0x0edd),
  ...range(0x0f00, 0x0f17),
  ...range(0x0f1a, 0x0f34),
  0x0f36,
  0x0f38,
  ...range(0x0f3e, 0x0f47),
  ...range(0x0f49, 0x0f6a),
  0x0f7f,
  0x0f85,
  ...range(0x0f88, 0x0f8b),
  ...range(0x0fbe, 0x0fc5),
  ...range(0x0fc7, 0x0fcc),
  0x0fcf,
  ...range(0x1000, 0x1021),
  ...range(0x1023, 0x1027),
  ...range(0x1029, 0x102a),
  0x102c,
  0x1031,
  0x1038,
  ...range(0x1040, 0x1057),
  ...range(0x10a0, 0x10c5),
  ...range(0x10d0, 0x10f8),
  0x10fb,
  ...range(0x1100, 0x1159),
  ...range(0x115f, 0x11a2),
  ...range(0x11a8, 0x11f9),
  ...range(0x1200, 0x1206),
  ...range(0x1208, 0x1246),
  0x1248,
  ...range(0x124a, 0x124d),
  ...range(0x1250, 0x1256),
  0x1258,
  ...range(0x125a, 0x125d),
  ...range(0x1260, 0x1286),
  0x1288,
  ...range(0x128a, 0x128d),
  ...range(0x1290, 0x12ae),
  0x12b0,
  ...range(0x12b2, 0x12b5),
  ...range(0x12b8, 0x12be),
  0x12c0,
  ...range(0x12c2, 0x12c5),
  ...range(0x12c8, 0x12ce),
  ...range(0x12d0, 0x12d6),
  ...range(0x12d8, 0x12ee),
  ...range(0x12f0, 0x130e),
  0x1310,
  ...range(0x1312, 0x1315),
  ...range(0x1318, 0x131e),
  ...range(0x1320, 0x1346),
  ...range(0x1348, 0x135a),
  ...range(0x1361, 0x137c),
  ...range(0x13a0, 0x13f4),
  ...range(0x1401, 0x1676),
  ...range(0x1681, 0x169a),
  ...range(0x16a0, 0x16f0),
  ...range(0x1700, 0x170c),
  ...range(0x170e, 0x1711),
  ...range(0x1720, 0x1731),
  ...range(0x1735, 0x1736),
  ...range(0x1740, 0x1751),
  ...range(0x1760, 0x176c),
  ...range(0x176e, 0x1770),
  ...range(0x1780, 0x17b6),
  ...range(0x17be, 0x17c5),
  ...range(0x17c7, 0x17c8),
  ...range(0x17d4, 0x17da),
  0x17dc,
  ...range(0x17e0, 0x17e9),
  ...range(0x1810, 0x1819),
  ...range(0x1820, 0x1877),
  ...range(0x1880, 0x18a8),
  ...range(0x1e00, 0x1e9b),
  ...range(0x1ea0, 0x1ef9),
  ...range(0x1f00, 0x1f15),
  ...range(0x1f18, 0x1f1d),
  ...range(0x1f20, 0x1f45),
  ...range(0x1f48, 0x1f4d),
  ...range(0x1f50, 0x1f57),
  0x1f59,
  0x1f5b,
  0x1f5d,
  ...range(0x1f5f, 0x1f7d),
  ...range(0x1f80, 0x1fb4),
  ...range(0x1fb6, 0x1fbc),
  0x1fbe,
  ...range(0x1fc2, 0x1fc4),
  ...range(0x1fc6, 0x1fcc),
  ...range(0x1fd0, 0x1fd3),
  ...range(0x1fd6, 0x1fdb),
  ...range(0x1fe0, 0x1fec),
  ...range(0x1ff2, 0x1ff4),
  ...range(0x1ff6, 0x1ffc),
  0x200e,
  0x2071,
  0x207f,
  0x2102,
  0x2107,
  ...range(0x210a, 0x2113),
  0x2115,
  ...range(0x2119, 0x211d),
  0x2124,
  0x2126,
  0x2128,
  ...range(0x212a, 0x212d),
  ...range(0x212f, 0x2131),
  ...range(0x2133, 0x2139),
  ...range(0x213d, 0x213f),
  ...range(0x2145, 0x2149),
  ...range(0x2160, 0x2183),
  ...range(0x2336, 0x237a),
  0x2395,
  ...range(0x249c, 0x24e9),
  ...range(0x3005, 0x3007),
  ...range(0x3021, 0x3029),
  ...range(0x3031, 0x3035),
  ...range(0x3038, 0x303c),
  ...range(0x3041, 0x3096),
  ...range(0x309d, 0x309f),
  ...range(0x30a1, 0x30fa),
  ...range(0x30fc, 0x30ff),
  ...range(0x3105, 0x312c),
  ...range(0x3131, 0x318e),
  ...range(0x3190, 0x31b7),
  ...range(0x31f0, 0x321c),
  ...range(0x3220, 0x3243),
  ...range(0x3260, 0x327b),
  ...range(0x327f, 0x32b0),
  ...range(0x32c0, 0x32cb),
  ...range(0x32d0, 0x32fe),
  ...range(0x3300, 0x3376),
  ...range(0x337b, 0x33dd),
  ...range(0x33e0, 0x33fe),
  ...range(0x3400, 0x4db5),
  ...range(0x4e00, 0x9fa5),
  ...range(0xa000, 0xa48c),
  ...range(0xac00, 0xd7a3),
  ...range(0xd800, 0xfa2d),
  ...range(0xfa30, 0xfa6a),
  ...range(0xfb00, 0xfb06),
  ...range(0xfb13, 0xfb17),
  ...range(0xff21, 0xff3a),
  ...range(0xff41, 0xff5a),
  ...range(0xff66, 0xffbe),
  ...range(0xffc2, 0xffc7),
  ...range(0xffca, 0xffcf),
  ...range(0xffd2, 0xffd7),
  ...range(0xffda, 0xffdc),
  ...range(0x10300, 0x1031e),
  ...range(0x10320, 0x10323),
  ...range(0x10330, 0x1034a),
  ...range(0x10400, 0x10425),
  ...range(0x10428, 0x1044d),
  ...range(0x1d000, 0x1d0f5),
  ...range(0x1d100, 0x1d126),
  ...range(0x1d12a, 0x1d166),
  ...range(0x1d16a, 0x1d172),
  ...range(0x1d183, 0x1d184),
  ...range(0x1d18c, 0x1d1a9),
  ...range(0x1d1ae, 0x1d1dd),
  ...range(0x1d400, 0x1d454),
  ...range(0x1d456, 0x1d49c),
  ...range(0x1d49e, 0x1d49f),
  0x1d4a2,
  ...range(0x1d4a5, 0x1d4a6),
  ...range(0x1d4a9, 0x1d4ac),
  ...range(0x1d4ae, 0x1d4b9),
  0x1d4bb,
  ...range(0x1d4bd, 0x1d4c0),
  ...range(0x1d4c2, 0x1d4c3),
  ...range(0x1d4c5, 0x1d505),
  ...range(0x1d507, 0x1d50a),
  ...range(0x1d50d, 0x1d514),
  ...range(0x1d516, 0x1d51c),
  ...range(0x1d51e, 0x1d539),
  ...range(0x1d53b, 0x1d53e),
  ...range(0x1d540, 0x1d544),
  0x1d546,
  ...range(0x1d54a, 0x1d550),
  ...range(0x1d552, 0x1d6a3),
  ...range(0x1d6a8, 0x1d7c9),
  ...range(0x20000, 0x2a6d6),
  ...range(0x2f800, 0x2fa1d),
  ...range(0xf0000, 0xffffd),
  ...range(0x100000, 0x10fffd),
]);

module.exports = {
  unassigned_code_points,
  commonly_mapped_to_nothing,
  non_ASCII_space_characters,
  prohibited_characters,
  bidirectional_r_al,
  bidirectional_l,
};
