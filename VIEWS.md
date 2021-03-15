# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

 - `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu w rezerwacji lub eventu przechodzimy na stronę szczegółów
- `/table/booking/:id`
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian
- `/table/booking/new`
  - analogicznie so powyżej, bez początkowych informacji
- `/table/events/:id`
  - analogicznie so powyżej, dla eventów
- `/table/events/new`
   - - analogicznie so powyżej, dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter`
  - tabela, która w wierszach będzie wyświetlała stoliki
  - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
  - w ostatniej kolumnie dostepne akcje dla danego stolika
- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
- `/waiter/order/:id`
  - jak powyższa

# Widok kuchni

- `/kitchen`
  - wyświetlać listę zamówień w kolejności ich złożenia
    - lista musi zawierać numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
