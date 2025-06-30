from django.contrib import admin
from .models import WordFrequency

@admin.register(WordFrequency)
class WordFrequencyAdmin(admin.ModelAdmin):
    list_display = ('word', 'frequency', 'date', 'year', 'month')
    list_filter = ('date__year', 'date__month', 'frequency')
    search_fields = ('word', 'date')
    ordering = ('-date', '-frequency')
    date_hierarchy = 'date'
    
    def year(self, obj):
        return obj.date.year
    year.short_description = 'Year'
    
    def month(self, obj):
        return obj.date.strftime('%B')
    month.short_description = 'Month'
    
    # Add filters for better data management
    list_per_page = 50
    
    fieldsets = (
        (None, {
            'fields': ('date', 'word', 'frequency')
        }),
    )