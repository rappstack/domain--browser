import { window__ctx__set } from 'ctx-core/dom'
import { ctx__new, type ctx_T } from 'ctx-core/be'
export function browser_ctx__ensure() {
	return globalThis.ctx ??= ctx__new()
}
export function browser_ctx__debug() {
	window__ctx__set(browser_ctx__ensure())
}
declare module globalThis {
	let ctx:ctx_T<''>
}
