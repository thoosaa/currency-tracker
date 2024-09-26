export class Observer {
  observers: Array<() => void>;

  constructor() {
    this.observers = [];
  }

  // Метод для подписки наблюдателя
  subscribe(fn: () => void) {
    this.observers.push(fn);
  }

  // Метод для отписки наблюдателя
  unsubscribe(fn: () => void) {
    this.observers = this.observers.filter((observer) => observer !== fn);
  }

  // Метод для уведомления всех наблюдателей
  notify() {
    this.observers.forEach((observer) => observer());
  }
}
