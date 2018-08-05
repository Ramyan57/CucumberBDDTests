Feature: Verify BDD tests

Scenario Outline: verify Rest API status
Given valid git hub repository link
When i search for "<keyword>"
Then i should see HTTP <response code>

Examples:
    |  keyword	     |  response code |
    |  Selenium   	 |  200           |
    |  java  		 |  200			  |

Scenario Outline: verify centigrade to Fahrenheit converter
Given temperature in <centigrade>
When i apply <centigrade> to fahrenheit formula
Then i should see temperature in <fahrenheit>

Examples:
    | centigrade | fahrenheit |
    |  20   	 | 68  	      |
    |  10        | 50         |
    |  15		 | 59         |

Scenario Outline: verify centigrade to fahrenheit converter on web site
Given i am on rapid tables web site
When i enter temperature in <centigrade>
Then i should see temperature in <fahrenheit> on web site

Examples:
    | centigrade | fahrenheit |
    |  20   	 | 68  	      |
    |  10        | 50         |
    |  15		 | 59         |