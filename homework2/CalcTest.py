import unittest
from Calc import Calculator  # The class we are going to implement

class TestCalculator(unittest.TestCase):
    def test_add(self):
        calc = Calculator()
        result = calc.add(2, 3)
        self.assertEqual(result, 5)  # Expect 2 + 3 = 5

    def test_subtract(self):
        calc = Calculator()
        self.assertEqual(calc.subtract(5, 2), 3)
        self.assertEqual(calc.subtract(-3, 4), -7)
        self.assertEqual(calc.subtract(10, -5), 15)
        self.assertEqual(calc.subtract(-8, -3), -5)
        self.assertEqual(calc.subtract(7, 7), 0)

    def test_multiply(self):
        calc = Calculator()
        self.assertEqual(calc.multiply(4, 3), 12)
        self.assertEqual(calc.multiply(-5, -2), 10)
        self.assertEqual(calc.multiply(6, -3), -18)
        self.assertEqual(calc.multiply(-7, 2), -14)
        self.assertEqual(calc.multiply(100, 0), 0)
        self.assertEqual(calc.multiply(0, -50), 0)
        self.assertEqual(calc.multiply(15, 1), 15)
        self.assertEqual(calc.multiply(-20, 1), -20)
        self.assertEqual(calc.multiply(1, 1), 1)

    def test_divide(self):
        calc = Calculator()
        self.assertEqual(calc.divide(10, 2), 5.0)
        self.assertEqual(calc.divide(7, 2), 3.5)

    def test_divide_by_zero(self):
        calc = Calculator()
        with self.assertRaises(ZeroDivisionError):
            calc.divide(5, 0)

if __name__ == "__main__":
    unittest.main()
