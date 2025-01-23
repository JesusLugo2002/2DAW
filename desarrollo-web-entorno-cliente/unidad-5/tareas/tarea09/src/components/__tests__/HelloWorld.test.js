import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";
import App from "@/App.vue";

describe("HelloWorld.vue", () => {
    // Verificando la renderización del componente
    it('El componente HelloWorld existe.', () => {
        const wrapper = mount(App)
        const helloWorldComponent = wrapper.findComponent(HelloWorld)
        expect(helloWorldComponent.exists()).toBe(true)
    })

    // Verificando el prop de msg
    it('El component HelloWorld obtiene el prop correctamente.', () => {
        expect(HelloWorld).toBeTruthy();
        const wrapper = mount(HelloWorld, {
            props: {
                msg: "Este mensaje es para una prueba"
            }
        })
        expect(wrapper.text()).toContain("Este mensaje es para una prueba")
    })

    // Verificando que el enlace de Vite existe
    it('El enlace de Vite existe', () => {
        const wrapper = mount(HelloWorld, {
            props: {
                msg: "Test de Vite"
            }
        });
        const link = wrapper.find('a[href="https://vite.dev/"]')
        expect(link.exists()).toBe(true)
        expect(link.attributes('target')).toBe('_blank')
        expect(link.attributes('rel')).toBe('noopener')
    })
})

