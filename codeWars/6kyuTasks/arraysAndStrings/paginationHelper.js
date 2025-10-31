// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

class PaginationHelper {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
	constructor(collection, itemsPerPage) {
		this.collection = collection;
		this.itemsPerPage = itemsPerPage;
	}

	// returns the number of items within the entire collection
	itemCount() {
		return this.collection.length;
	}

	// returns the number of pages
	pageCount() {
		return Math.ceil(this.itemCount() / this.itemsPerPage);
	}

	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
	pageItemCount(pageIndex) {
		if (pageIndex + 1 > this.pageCount() || pageIndex < 0) {
			return -1;
		}

		if (pageIndex + 1 == this.pageCount()) {
			if (this.itemCount() % this.itemsPerPage == 0) {
				return this.itemsPerPage;
			} else {
				return this.itemCount() % this.itemsPerPage;
			}
		} else {
			return this.itemsPerPage;
		}
	}

	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
	pageIndex(itemIndex) {
		if (itemIndex >= this.itemCount() || itemIndex < 0) {
			return -1;
		}

		return Math.floor(itemIndex / this.itemsPerPage);
	}
}

const helper = new PaginationHelper(
	[
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"c",
		"b",
	],
	21
);

// console.log(helper.itemCount());
// console.log(helper.pageCount());
console.log(helper.pageItemCount(0));
// console.log(helper.pageIndex(5));
