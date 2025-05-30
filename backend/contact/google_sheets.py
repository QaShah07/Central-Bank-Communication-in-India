# backend/contact/google_sheets.py

import os
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from .models import ContactSubmission

# 1. Create the scope and credentials for the service account JSON:
SCOPES = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']

# Path to your service account JSON file (downloaded from GCP Console)
# Put this JSON in a secure location, e.g. backend/credentials/google_service.json
SERVICE_ACCOUNT_FILE = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    '../credentials/google_service.json'
)

# The ID of your Google Sheet (found in the sheet’s URL)
# e.g. https://docs.google.com/spreadsheets/d/<<THIS_ID>>/edit#gid=0
SHEET_ID = os.environ.get('GOOGLE_SHEET_ID', 'YOUR_SHEET_ID_HERE')

def append_submission_to_sheet(submission: ContactSubmission) -> None:
    """
    Given a ContactSubmission instance, append a row to the Google Sheet.
    """
    # 2. Authenticate with gspread
    creds = ServiceAccountCredentials.from_json_keyfile_name(
        SERVICE_ACCOUNT_FILE, SCOPES
    )
    client = gspread.authorize(creds)

    # 3. Open the sheet by ID
    sheet = client.open_by_key(SHEET_ID).sheet1  # assuming you want the first worksheet

    # 4. Prepare the row data (match the column order in your sheet)
    row = [
        submission.submitted_on.strftime('%Y-%m-%d %H:%M:%S'),
        submission.name,
        submission.institute_name,
        submission.email,
        dict(submission.PURPOSE_CHOICES).get(submission.purpose_of_contact, ''),
    ]

    # 5. Append the row at the bottom
    sheet.append_row(row, value_input_option='USER_ENTERED')
