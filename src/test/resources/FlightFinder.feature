Feature: Verify flights module scenarios

  Scenario Outline: verify expensive flight
    Given i am on priceline homepage
    When i search for flights from "<departure>" to "<arrival>"
    Then i should find most expensive flight

    Examples: 
      | departure     | arrival       |
      | San Francisco | New York City |
