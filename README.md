# Sheikh Ehtisham Ur Rehman - Portfolio Website

A Django-based portfolio website showcasing projects, achievements, and professional experience.

## Features

- Responsive design with dark purple and black theme
- Smooth scroll animations
- Project showcase with live demo and code links
- Professional experience timeline
- Achievement highlights
- Contact integration (WhatsApp, LinkedIn, GitHub)
- Resume download functionality

## Setup Instructions

1. **Install Dependencies**
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

2. **Run Migrations**
   \`\`\`bash
   python manage.py makemigrations
   python manage.py migrate
   \`\`\`

3. **Create Superuser (Optional)**
   \`\`\`bash
   python manage.py createsuperuser
   \`\`\`

4. **Collect Static Files**
   \`\`\`bash
   python manage.py collectstatic
   \`\`\`

5. **Run Development Server**
   \`\`\`bash
   python manage.py runserver
   \`\`\`

6. **Access the Website**
   - Portfolio: http://127.0.0.1:8000/
   - Admin Panel: http://127.0.0.1:8000/admin/

## Customization

### Update Contact Information
Edit the context variables in `portfolio_app/views.py`:
- `whatsapp_url`: Your WhatsApp contact link
- `linkedin_url`: Your LinkedIn profile URL
- `github_url`: Your GitHub profile URL

### Add Resume File
Place your resume PDF file in the `media/` directory as `resume-sheikh-ehtisham.pdf`

### Modify Projects, Achievements, and Experience
Update the data arrays in `portfolio_app/views.py` or use the Django admin panel after running migrations.

## File Structure

\`\`\`
portfolio/
├── manage.py
├── portfolio/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── portfolio_app/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── urls.py
│   └── views.py
├── templates/
│   ├── base.html
│   └── portfolio/
│       └── index.html
├── static/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── portfolio.js
│   └── images/
└── media/
\`\`\`

## Technologies Used

- Django 4.2+
- HTML5
- CSS3 (Custom styling with CSS variables)
- JavaScript (Vanilla JS for animations and interactions)
- Responsive Design
