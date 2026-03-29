from duckduckgo_search import DDGS
import time

snacks = [
    "Takis Fuego chips product site:takis.us",
    "Doritos Spicy Sweet Chili product site:doritos.com",
    "Paqui Haunted Ghost Pepper product site:paqui-chips.com"
]

print("--- Automated Snack Scraper Test ---")
with DDGS() as ddgs:
    for snack in snacks:
        print(f"Searching for: {snack}")
        try:
            results = list(ddgs.text(snack, max_results=1))
            if results:
                print(f"-> {results[0]['href']}")
            else:
                print("-> No link found")
        except Exception as e:
            print(f"-> Error: {e}")
        time.sleep(2)
