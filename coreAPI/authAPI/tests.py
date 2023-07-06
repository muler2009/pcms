from django.test import TestCase
from django.contrib.auth import get_user_model


class UserAccount(TestCase):

    def test_new_users(self):
        # get the model
        db = get_user_model()
        # setting sample data for the test
        super_user = db.objects.create_superuser(
            'test@superuser.com', 'pcms', 'password', 'administrator')
        self.assertEqual(super_user.email, 'test@superuser.com')
        self.assertEqual(super_user.username, 'pcms')
        self.assertEqual(super_user.user_role, 'administrator')
        self.assertTrue(super_user.is_superuser)
        self.assertTrue(super_user.is_staff)
        self.assertTrue(super_user.is_active)
        self.assertEqual(str(super_user), 'pcms')

        with self.assertRaises(ValueError):
            db.objects.create_superuser(email='test@superuser.com', username='pcms1',
                                        user_role='administrator', password='password', is_superuser=False)

        with self.assertRaises(ValueError):
            db.objects.create_superuser(email='', username='pcms1',
                                        user_role='administrator', password='password', is_superuser=True)

        with self.assertRaises(ValueError):
            db.objects.create_superuser(email='test@superuser.com', username='pcms1',
                                        user_role='administrator', password='password', is_staff=False)

    def test_user(self):
        db = get_user_model()
        user = db.objects.create_user(
            'test@user.com', 'username', 'pcms test', 'administrator')
        self.assertEqual(user.email, 'test@user.com')
        self.assertEqual(user.username, 'username')
        self.assertEqual(user.user_role, 'administrator')
        self.assertFalse(user.is_superuser)
        self.assertFalse(user.is_staff)
        self.assertTrue(user.is_active)

        with self.assertRaises(ValueError):
            db.objects.create_superuser(email='', username='p',
                                        user_role='administrator', password='password')
