import { window__ctx__set } from 'ctx-core/dom'
import { ctx__new, type ctx_T } from 'ctx-core/be'
export function browser_ctx__ensure() {
	return globalThis.browser_ctx ??= browser_ctx__new()
}
export function browser_ctx__new() {
	const ctx = ctx__new()
	window__ctx__set(ctx)
	return ctx
}
declare module globalThis {
	let browser_ctx:ctx_T<''>
}
