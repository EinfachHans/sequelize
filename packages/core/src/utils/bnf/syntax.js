import * as _Shared from "./shared.js";
let _rawWasm = _Shared.DecodeBase64("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");
let _ctx = null;
if (typeof window === 'undefined') {
	_ctx = new WebAssembly.Instance(
		new WebAssembly.Module(
			_rawWasm
		), {js: {print_i32: console.log}}
	);
}
let ready = new Promise(async (res) => {
	if (typeof window !== 'undefined') {
		_ctx = await WebAssembly.instantiate(
			await WebAssembly.compile(_rawWasm),
			{js: {print_i32: console.log}}
		);
	}

	Object.freeze(_ctx);
	_rawWasm = null;
	res();
});
export { ready };
export function Parse_Attribute (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "attribute");
}
export function Parse_AttributeBegin (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "attributeBegin");
}
export function Parse_PartialJsonPath (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "partialJsonPath");
}
export function Parse_Identifier (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "identifier");
}
export function Parse_Digit (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "digit");
}
export function Parse_Number (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "number");
}
export function Parse_Association (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "association");
}
export function Parse_JsonAccess (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "jsonAccess");
}
export function Parse_IndexAccess (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "indexAccess");
}
export function Parse_KeyAccess (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "keyAccess");
}
export function Parse_Key (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "key");
}
export function Parse_NonEmptyString (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "nonEmptyString");
}
export function Parse_EscapedCharacter (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "escapedCharacter");
}
export function Parse_AnyExceptQuoteOrBackslash (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "anyExceptQuoteOrBackslash");
}
export function Parse_Transform (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "transform");
}
export function Parse_Cast (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "cast");
}
export function Parse_Modifier (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "modifier");
}