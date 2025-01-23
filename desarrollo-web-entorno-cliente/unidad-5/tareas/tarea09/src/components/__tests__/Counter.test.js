import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Counter from "../Counter.vue";

describe("Counter.vue", () => {
  // Testeo el renderizado
  it("Counter.vue: renderiza correctamente", () => {
    // Monto el componente
    const wrapper = mount(Counter);
    // Compruebo que contiene el texto "0"
    expect(wrapper.html()).toContain("<p>0</p>");
  });

  // Testeo el evento click
  it("Counter.vue: incrementa contador cuando el botón es pulsado", async () => {
    // Monto el componente
    const wrapper = mount(Counter);
    // Busco el botón y lo pulso
    await wrapper.find("button").trigger("click");
    // Compruebo que el contador ahora es 1
    expect(wrapper.html()).toContain("<p>1</p>");
  });
});
