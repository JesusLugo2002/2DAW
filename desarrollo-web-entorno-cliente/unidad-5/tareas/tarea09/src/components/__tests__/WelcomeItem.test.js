import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import WelcomeItem from "../WelcomeItem.vue";

describe('WelcomeItem.vue', () => {
    // Verificando si los slots se muestran correctamente.
    const wrapper = mount(WelcomeItem, {
        slots: {
            icon: "<span class='icon'>Icono de prueba</span>",
            heading: "<h1 class='heading'>Titulo de prueba</h1>",
            default: "<p class='main'>Descripcion de prueba</p>"
        }
    });

    // Chequeando que el slot "icon" se renderiza
    it('Slot "icon" se renderiza correctamente', () => {
        const iconSlot = wrapper.find('.icon')
        expect(iconSlot.exists()).toBeTruthy();
        expect(iconSlot.text()).toBe('Icono de prueba')
    })

    // Chequeando que el slot "heading" se renderiza
    it('Slot "heading" se renderiza correctamente', () => {
        const headingSlot = wrapper.find('.heading')
        expect(headingSlot.exists()).toBeTruthy();
        expect(headingSlot.text()).toBe('Titulo de prueba')
    })

    // Chequeando que el slot "default" se renderiza
    it('Slot "default" se renderiza correctamente', () => {
        const defaultSlot = wrapper.find('.main')
        expect(defaultSlot.exists()).toBeTruthy();
        expect(defaultSlot.text()).toBe('Descripcion de prueba')
    })
})