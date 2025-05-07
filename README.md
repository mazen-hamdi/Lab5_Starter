# Lab 5 - Starter Names
- Mohamed Mazen Hamdi
- Arman Nurbalin 
### GitHub Pages links
- Expose:  https://mazen-hamdi.github.io/Lab5_Starter/expose.html
- Explore: https://mazen-hamdi.github.io/Lab5_Starter/explore.html

1) Would you use a unit test to test the "message" feature of a messaging application? Why or why not?

No, I would not use a unit test for testing the entire "message" feature. This feature involves multiple components working together - user input handling, network communication, database operations, and UI updates. Unit tests are designed to test isolated units of code, not integrated features. For the messaging feature, integration tests or end-to-end tests would be more appropriate, as they can verify how components work together in a real-world scenario.

2) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?

Yes, I would use a unit test for the "max message length" feature. This is a perfect candidate for unit testing because:
- It has a single, clearly defined responsibility
- It has well-defined inputs and expected outputs
- It can be tested in isolation
- The behavior is deterministic (same input always produces same output)

Unit tests can easily verify that messages under 80 characters are allowed and messages over 80 characters are rejected, covering all edge cases.