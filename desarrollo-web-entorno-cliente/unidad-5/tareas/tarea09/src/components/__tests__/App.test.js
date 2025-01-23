import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../../App.vue";
import Counter from "../Counter.vue";
import AgeGuess from "../AgeGuess.vue";

/*
/ Test para comprobar si existen los componentes a renderizar App
*/

// Verificar si el componente Counter existe
test("App: existe componente Counter ", () => {
  const wrapper = mount(App);
  const counterComponent = wrapper.findComponent(Counter);
  expect(counterComponent.exists()).toBe(true);
});

// Verificar si el componente AgeGuess existe
test("App: existe componente AgeGuess ", () => {
  const wrapper = mount(App);
  const ageGuessComponent = wrapper.findComponent(AgeGuess);
  expect(ageGuessComponent.exists()).toBe(true);
});
