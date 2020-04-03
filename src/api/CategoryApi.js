import request, {CATEGORY_URL} from './axios';

class CategoryApi {

    getCategoryInfo(categoryCode) {
        return request.get(CATEGORY_URL + `/${categoryCode}`).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    getCategoryList(categoryCode) {
        return request.get(CATEGORY_URL + `/list/${categoryCode}`).then(
            (response) => {
                return response.data
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

}

export default CategoryApi;
