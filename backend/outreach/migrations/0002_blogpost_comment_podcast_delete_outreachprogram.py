# Generated by Django 5.2.1 on 2025-06-01 02:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('outreach', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('category', models.CharField(choices=[('policy_updates', 'Policy Updates'), ('communication_analysis', 'Communication Analysis'), ('media_mentions', 'Media Mentions')], default='policy_updates', help_text='Blog category', max_length=50)),
                ('excerpt', models.TextField(help_text='Short excerpt or subtitle')),
                ('content', models.TextField(help_text='Full blog content (not shown in list view)')),
                ('image', models.ImageField(blank=True, help_text='Feature image for the blog post', null=True, upload_to='outreach/blog/images/')),
                ('slug', models.SlugField(max_length=100, unique=True)),
                ('published_on', models.DateField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-published_on'],
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('avatar_url', models.URLField(blank=True, help_text='Optional URL to user’s avatar image', max_length=500, null=True)),
                ('comment_text', models.TextField(help_text='The comment body')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Podcast',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('thumbnail', models.ImageField(blank=True, help_text='Thumbnail image for this podcast episode', null=True, upload_to='outreach/thumbnails/podcasts/')),
                ('title', models.CharField(max_length=255)),
                ('episode_number', models.PositiveIntegerField(help_text='Episode number (e.g. 1, 2, 3)')),
                ('speaker', models.CharField(help_text='Name of the speaker (e.g. Dr. Anya Sharma)', max_length=255)),
                ('description', models.TextField(help_text='Description of this episode')),
                ('media_url', models.URLField(help_text='URL to the podcast audio or video (e.g. an MP3 link or YouTube embed URL)', max_length=500)),
                ('published_on', models.DateField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-episode_number'],
            },
        ),
        migrations.DeleteModel(
            name='OutreachProgram',
        ),
    ]
