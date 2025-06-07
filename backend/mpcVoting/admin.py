from django.contrib import admin
from .models import MemberVoting, DissentYear

@admin.register(MemberVoting)
class MemberVotingAdmin(admin.ModelAdmin):
    list_display = ("name", "hikes", "cuts", "holds", "total_votes")
    search_fields = ("name",)
    ordering = ("name",)


@admin.register(DissentYear)
class DissentYearAdmin(admin.ModelAdmin):
    list_display = ("year", "explicit_count", "implicit_count")
    ordering = ("-year",)
    # So you can easily enter or edit each year’s counts
