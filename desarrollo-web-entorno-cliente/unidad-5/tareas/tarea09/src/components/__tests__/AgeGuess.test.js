import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AgeGuess from "../AgeGuess.vue";

// Test para verificar los props
test("mount component", async () => {
  expect(AgeGuess).toBeTruthy();

  const wrapper = mount(AgeGuess, {
    props: {
      title: "App Adivina la edad",
    },
  });
  expect(wrapper.text()).toContain("App Adivina la edad");
});

// Test el fetch de la API
test("input and fetch behavior", async () => {
  const wrapper = mount(AgeGuess, {
    props: {
      title: "App Adivina la edad",
    },
  });

  // Simular entrada de texto
  const input = wrapper.find("input");
  await input.setValue("John");
  expect(input.element.value).toBe("John");

  // Simular click en el botón
  const button = wrapper.find("button");
  await button.trigger("click");

  // Verificar el resultado después de la llamada a la API simulada
  setTimeout(() => {
    const creds = wrapper.find(".creds");
    expect(creds.text()).toContain("Nombre: John");
  }, 500); // Timeout para esperar el fetch simulado
});
