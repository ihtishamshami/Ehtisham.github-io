from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
import os
from django.conf import settings


class Command(BaseCommand):
    help = 'Setup portfolio with initial data and media directories'

    def handle(self, *args, **options):
        # Create media directory if it doesn't exist
        media_root = settings.MEDIA_ROOT
        if not os.path.exists(media_root):
            os.makedirs(media_root)
            self.stdout.write(
                self.style.SUCCESS(f'Created media directory: {media_root}')
            )

        # Create static directory if it doesn't exist
        static_root = settings.STATIC_ROOT
        if not os.path.exists(static_root):
            os.makedirs(static_root)
            self.stdout.write(
                self.style.SUCCESS(f'Created static directory: {static_root}')
            )

        # Create images directory in static
        images_dir = os.path.join(settings.BASE_DIR, 'static', 'images')
        if not os.path.exists(images_dir):
            os.makedirs(images_dir)
            self.stdout.write(
                self.style.SUCCESS(f'Created images directory: {images_dir}')
            )

        self.stdout.write(
            self.style.SUCCESS('Portfolio setup completed successfully!')
        )
        self.stdout.write(
            self.style.WARNING('Remember to:')
        )
        self.stdout.write('1. Add your resume PDF to media/ directory as "resume-sheikh-ehtisham.pdf"')
        self.stdout.write('2. Update contact URLs in portfolio_app/views.py')
        self.stdout.write('3. Run "python manage.py collectstatic" before deployment')
