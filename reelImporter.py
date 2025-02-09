import csv
import json

def csv_to_json(csv_filename, json_filename):
    data = {"reelMedia": []}  # Initialize the dictionary
    
    with open(csv_filename, mode='r', encoding='utf-8') as csv_file:
        reader = csv.DictReader(csv_file)  # Read CSV with first row as keys
        data["reelMedia"] = [row for row in reader]  # Convert rows to dicts and store in array
    
    with open(json_filename, mode='w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4)  # Save JSON with indentation
    
    print(f"JSON file '{json_filename}' has been created successfully.")

# Example usage
csv_to_json("reelMedia.csv", "reelMedia.json")


##### open a terminal, run 'python3 reelImporter.py'