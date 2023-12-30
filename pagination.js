class Pagination
{
    constructor(query, queryString)
     {
        this.query = query;
        this.queryString = queryString;
      }

    pagination()
    {
        if(this.queryString.withoutPagination)
        {
           return this;
        }
        else
         {
            const page = this.queryString.page * 1 || 1;
            const limit = this.queryString.perPage * 1 || 10;
            const skip = (page - 1) * limit;
            this.query = this.query.skip(skip).limit(limit);
            return this;
         }
    }

      paginationResponse(data){

          if(this.queryString.withoutPagination)
          {
              return null;
          }
         return{
            count:data.totalDocuments,
            perPage:data.paginate?.queryString?.perPage > 0 ? data.paginate?.queryString?.perPage*1:10,
            page:data.paginate?.queryString?.page> 0 ? data.paginate?.queryString?.page*1:1
        }
    }
}

module.exports = Pagination;