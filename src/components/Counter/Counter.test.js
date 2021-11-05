import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Counter from ".";

describe("Counter Component", () => {
  // testes de estilizacao do componente
  test("deve iniciar o titulo com o valor 0", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).toBeInTheDocument();
  });

  test("deve conter a classe counter__title no titulo", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).toHaveClass("counter__title");
  });

  test("nao deve iniciar o titulo com as classes counter__title--increment e counter__title-decrement", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).not.toHaveClass("counter__title--increment");
    expect(counterTitle).not.toHaveClass("counter__title--decrement");
  });

  test("deve conter um botao incrementar", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(buttonIncrement).toHaveClass("button");
  });

  test("deve conter um botao incrementar com as classes button e button--increment", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(buttonIncrement).toHaveClass("button");
    expect(buttonIncrement).toHaveClass("button--increment");
  });

  test("deve conter um botao decrementar", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(buttonDecrement).toHaveClass("button");
  });

  test("deve conter um botao decrementar com as classes button e button--increment", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(buttonDecrement).toHaveClass("button");
    expect(buttonDecrement).toHaveClass("button--decrement");
  });

  // teste de evento no componente
  test("deve incrementar + 1 ao clicar no botao incrementar", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("deve decrementar - 1 ao clicar no botao decrementar", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("deve adiciona a classe counter__title--increment no titulo, quando o valor for maior do que 0", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--increment"
    );
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toHaveClass("counter__title--increment");
  });

  test("deve adiciona a classe counter__title--decrement no titulo, quando o valor for menor do que 0", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--decrement"
    );
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toHaveClass("counter__title--decrement");
  });
});