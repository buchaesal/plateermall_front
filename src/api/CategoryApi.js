import request, {CATEGORY_URL} from './axios';

class CategoryApi {

    getCategory(categoryCode) {
        return request.get(CATEGORY_URL + `/${categoryCode}`).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    getTopCategoryList() {
        return request.get(CATEGORY_URL +  `/`).then(
            (response) => {
                return response.data;
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

    getCategoryList(categoryCode) {
        return request.post(CATEGORY_URL + `/list/${categoryCode}`).then(
            (response) => {
                return response.data
            }
        ).catch(function (error) {
            console.log(error);
        });
    }

}

export default CategoryApi;
