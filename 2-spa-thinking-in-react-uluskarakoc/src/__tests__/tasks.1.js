import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
import books from '../mocks/books';

afterEach(cleanup);

const headerProps = {
  title: 'Pineapple beach',
};

describe('1. `About` Component', () => {
  let About;

  beforeEach(async () => {
    const module = await import('../components/About');
    About = module.default;
  });

  test('renders the About component', () => {
    const { getByText } = render(<About />);
    const about = getByText(/About The Library/i);
    expect(about).toBeVisible();
  });

});

describe('2. `Header` Component', () => {
  test('renders the Header component with the correct title', () => {
    const { getByText } = render(<Header {...headerProps} />);
    const header = getByText(/Pineapple beach/i);
    expect(header).toBeVisible();
  });

});

describe('3. `NavBar` Component', () => {
  let NavBar, Menu;

  beforeEach(async () => {
    const navBarModule = await import('../components/NavBar');
    NavBar = navBarModule.default;
    const menuModule = await import('../components/Navigations/Menu');
    Menu = menuModule.default;
  });

  test('renders the NavBar component', () => {
    const { getByText } = render(<NavBar />);
    const navBar = getByText(/Training/i);
    expect(navBar).toBeVisible();
  });

  test("displays the menu when the 'Training' button is clicked", () => {
    const { getByText } = render(<NavBar />);
    const trainingButton = screen.getByText(/Training/i);
    fireEvent.click(trainingButton);
    render(<Menu />);
    expect(screen.getByText(/bootcamp/i)).toBeVisible();
    expect(screen.getByText(/part-time/i)).toBeVisible();
    expect(screen.getByText(/advanced react/i)).toBeVisible();
    expect(screen.getByText(/react native/i)).toBeVisible();
  });

});

describe('4. `Books` Component', () => {
  let Books, BookFilter, BookList;

  beforeEach(async () => {
    const booksModule = await import('../components/Books');
    Books = booksModule.default;
  });

  test('renders the Books component', () => {
    const { getByText } = render(<Books />);
    const books = getByText(/Books/i);
    expect(books).toBeVisible();
  });

});

describe('5. `BookList` and `BookFilter` Components', () => {
    let BookList, BookFilter;
  
    beforeEach(async () => {
      const bookFilterModule = await import('../components/BookFilter');
      BookFilter = bookFilterModule.default;
      const bookListModule = await import('../components/BookList');
      BookList = bookListModule.default;
    });
  
    test('renders the BookFilter component', () => {
      render(<BookFilter />);
    });
  
    test('renders the BookList component', () => {
      render(<BookList books={books} />);
    });
  
  });
