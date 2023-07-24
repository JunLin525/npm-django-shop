from django.test import TestCase
from django.urls import reverse
from .models import shop, comment
# Create your tests here.

class ShopTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.store=shop.objects.create(
        Name    = "三季 Sanji Teahouse ",
        Price   = "250",
        Address = "235新北市中和區興南路二段22-1號",
        Country = "Myanmar",
        Rating  = "5",
        Introduction ="這是一間緬甸餐廳",
        Picture ="",

        )
    def test_book_content(self):
        self.assertEqual(self.store.Name, "三季 Sanji Teahouse ")
        self.assertEqual(self.store.Price, "250")
        self.assertEqual(self.store.Address, "235新北市中和區興南路二段22-1號")
        self.assertEqual(self.store.Country, "Myanmar")
        self.assertEqual(self.store.Rating, "5")
        self.assertEqual(self.store.Introduction, "這是一間緬甸餐廳")
        self.assertEqual(self.store.Picture, "")


