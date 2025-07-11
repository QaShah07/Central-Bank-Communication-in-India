from django.contrib import admin
from .models import MPCDiscussion

@admin.register(MPCDiscussion)
class MPCDiscussionAdmin(admin.ModelAdmin):
    list_display = (
        'name', 
        'month_year', 
        'member_type', 
        'analysis_score',
        'inflation_actual',
        'growth_actual',
        'gdp_actual'
    )
    list_filter = ('member_type', 'month_year')
    search_fields = ('name', 'month_year')
    ordering = ('-month_year', 'name')
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('month_year', 'name', 'member_type', 'analysis_score')
        }),
        ('Inflation Data', {
            'fields': ('inflation_actual', 'inflation_predicted', 'inflation_error'),
            'classes': ('collapse',)
        }),
        ('Growth Data', {
            'fields': ('growth_actual', 'growth_predicted', 'growth_error'),
            'classes': ('collapse',)
        }),
        ('GDP Data', {
            'fields': ('gdp_actual', 'gdp_predicted', 'gdp_error'),
            'classes': ('collapse',)
        }),
    )