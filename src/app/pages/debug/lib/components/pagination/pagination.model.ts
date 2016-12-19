export class Pagination {
  totalCount: number
  pages: number[] = []
  limit = 10
  currentPage = 1

  constructor() {

  }

  //点按分页
  clickPage(page, clickPageEvent) {
    console.log("page: ", page);
    this.currentPage = page;
    clickPageEvent.emit(this.currentPage);
  }

  clickPrevPage(clickPageEvent){
    this.currentPage--;
    //保护
    if (this.currentPage < 1){
      this.currentPage = 1;
    }
    console.log("currentPage: ", this.currentPage);
    clickPageEvent.emit(this.currentPage);
  }

  clickNextPage(clickPageEvent){
    this.currentPage++;
    //保护
    if (this.currentPage > Math.ceil(this.totalCount / this.limit)){
      this.currentPage = Math.ceil(this.totalCount / this.limit);
    }
    clickPageEvent.emit(this.currentPage);
  }

  isFirstPage():boolean {
    return this.currentPage == 1;
  }

  isLastPage():boolean {
    return this.currentPage == Math.ceil(this.totalCount / this.limit);
  }

  set(totalCount: number, page: number) {
    //console.log("pagination.set() is called: ", totalCount, page);

    this.totalCount = totalCount;
    this.currentPage = page;

    this.pages = [];
    let totalPages = Math.ceil( this.totalCount / this.limit );
    let startPage = this.currentPage  - 5
    if (startPage < 0) {
      startPage = 0;
    }
    let endPage = startPage + 10;
    if (endPage > totalPages - 1 ) {
      endPage = totalPages - 1;
    }

    for (var i = startPage; i <= endPage; i++) {
      this.pages.push(i+1);
    }
  }
}
