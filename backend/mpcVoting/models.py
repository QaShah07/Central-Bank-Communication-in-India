from django.db import models

class MemberVoting(models.Model):
    """
    Stores each MPC member’s total Hikes, Cuts, and Holds. 
    TotalVotes is computed as hikes + cuts + holds.
    """
    name = models.CharField(max_length=100)
    hikes = models.PositiveIntegerField(default=0)
    cuts = models.PositiveIntegerField(default=0)
    holds = models.PositiveIntegerField(default=0)

    @property
    def total_votes(self):
        return self.hikes + self.cuts + self.holds

    class Meta:
        ordering = ["name"]  # Sort alphabetically by member name

    def __str__(self):
        return self.name


class DissentYear(models.Model):
    """
    Stores the yearly counts of explicit and implicit dissent. 
    We’ll show a bar for each year (e.g. 2019, 2020, 2021, 2022, 2023).
    """
    year = models.PositiveIntegerField(unique=True)
    explicit_count = models.PositiveIntegerField(default=0)
    implicit_count = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["year"]  # ascending order: 2019, 2020, …

    def __str__(self):
        return str(self.year)
