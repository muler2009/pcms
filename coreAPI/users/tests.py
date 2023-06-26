from django.test import TestCase
from django.contrib.auth import get_user_model

# Create your tests here.


class UserAccountS(TestCase):

    def test_new_users(self):
        # get the model
        db = get_user_model()
        # setting sample data for the test
        super_user = db.objects.create_superuser(
            'test@superuser.com', 'pcms', 'Company', 'password')
        self.assertEqual(super_user.email, 'test@superuser.com')
        self.assertEqual(super_user.username, 'pcms')
        self.assertEqual(super_user.first_name, 'Company')
        self.assertTrue(super_user.is_superuser)
        self.assertTrue(super_user.is_staff)
        self.assertTrue(super_user.is_active)
        self.assertEqual(str(super_user), 'pcms')
