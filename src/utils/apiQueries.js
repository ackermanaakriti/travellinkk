import axiosBaseURL from '../baseUrl';

// Post Forms
export const PostContactUsDatas = (formData) => {
   const res = axiosBaseURL.post(`/api/v1/contact-us`,formData);
   return res;
}

export const PostBookDatas = (id,formData) => {
   // const id = formData?.package_id;
   const res = axiosBaseURL.post(`/api/v1/package-booking/${id}`,formData);
   return res;
}

export const PostFeedbackDatas = (formData) => {
   const res = axiosBaseURL.post(`/api/v1/testimonials`,formData);
   return res;
}

export const PostCustomizeDatas = (formData) => {
   const res = axiosBaseURL.post(`/api/v1/trip-enquiry`,formData);
   return res;
}

export const PostSearchInput = async(destination) => {
   const res = await axiosBaseURL.post(`/api/v1/packages/search`,{
      search_key: destination
   });
   return res.data?.data;
}

// Fetch Apis
export const FetchNavListDatas = () => {
   const data = axiosBaseURL.get(`/api/v1/nestedPackagedataForDestations`);
   return data;
}

export const FetchAllTitleDatas = () => {
   const data = axiosBaseURL.get(`/api/v1/home-page-info`);
   return data;
}

export const FetchSiteInfoDatas = () => {
   const data = axiosBaseURL.get(`/api/v1/site-info`);
   return data;
}

export const FetchAboutDatas = () => {
   const data = axiosBaseURL.get(`/api/v1/about`);
   return data;
}

export const FetchAboutGalleryDatas = () => {
   const data = axiosBaseURL.get(`/api/v1/aboutgallery`);
   return data;
}

export const FetchIndexTopAboutDatas = () => {
   const data = axiosBaseURL.get(`/api/v1/welcome-to-nepal-the-himalayas`);
   return data;
}

export const FetchtopAboutDatas = () => {
   const data = axiosBaseURL.get(`/api/v1/our-team`);
   return data;
}

export const FetchInnerTopAboutDatas = () => {
   const data = axiosBaseURL.get(`/api/v1/why-travel-with-us`);
   return data;
}

export const FetchDestinationDatas = (slug) => {
   const data = axiosBaseURL.get(`/api/v1/package/${slug}`);
   return data;
}

export const FetchAboutDetailsCardDatas = () => {
   const data = axiosBaseURL.get(`/api/v1/whyus`);
   return data;
}

export const FetchPartnerDatas = () => {
   const data = axiosBaseURL.get(`/api/v1/partners`);
   return data;
}

export const FetchheroData = () => {
   const data = axiosBaseURL.get(`/api/v1/banners`);
   return data;
}

export const FetchpopulartripData = () => {
   const data = axiosBaseURL.get(`/api/v1/popular-trip`);
   return data;
}

export const FetchpackagesData = () => {
   const data = axiosBaseURL.get(`/api/v1/packages`);
   return data;
}

export const FetchCountryData = (slug) => {
   const data = axiosBaseURL.get(`/api/v1/package-destination/${slug}`);
   return data;
}

export const FetchPackagesCatagoryData = (slug) => {
   const data = axiosBaseURL.get(`/api/v1/package-categories/${slug}`);
   return data;
}

export const FetchRelatedPackagesData = () => {
   const data = axiosBaseURL.get(`/api/v1/related-packages`);
   return data;
}

export const FetchCountryInfoData = () => {
   const data = axiosBaseURL.get(`/api/v1/country-wise-information`);
   return data;
}

export const FetchpackagesDetailsData = (slug) => {
   const data = axiosBaseURL.get(`/api/v1/package/${slug}`);
   return data;
}

export const FetchservicesData = () => {
   const data = axiosBaseURL.get(`/api/v1/services`);
   return data;
}

export const FetchindividualServicesData = (slug) => {
   const data = axiosBaseURL.get(`/api/v1/service/${slug}`);
   return data;
}

export const FetchServicesTopData = () => {
   const data = axiosBaseURL.get(`/api/v1/welcome-to-nepal-and-the-himalayas-services`);
   return data;
}

export const FetchtestimonialsData = () => {
   const data = axiosBaseURL.get(`/api/v1/testimonials`);
   return data;
}

export const FetchtestimonialsDetailData = () => {
   const data = axiosBaseURL.get(`/api/v1/reviewstestimonials-from-our-customers`);
   return data;
}

export const FetchblogsData = () => {
   const data = axiosBaseURL.get(`/api/v1/blogs`);
   return data;
}

export const FetchindividualblogData = (slug) => {
   const data = axiosBaseURL.get(`/api/v1/blog/${slug}`);
   return data;
}

export const FetchblogsTopData = () => {
   const data = axiosBaseURL.get(`/api/v1/some-blogs-you-might-be-interested-in`);
   return data;
}

export const FetchBranchLocationData = () => {
   const data = axiosBaseURL.get(`/api/v1/branch-locations`);
   return data;
}

export const FetchNavCountryData = (id) => {
   const data = axiosBaseURL.get(`/api/v1/country-wise-information/${id}`);
   return data;
}

export const FetchNavCultureData = (slug) => {
   const data = axiosBaseURL.get(`/api/v1/information-category/${slug}`);
   return data;
}

export const FetchNavCultureInfoData = (slug) => {
   const data = axiosBaseURL.get(`/api/v1/country-wise-single-information/${slug}`);
   return data;
}

export const FetchNavDestinationInfoData = (slug) => {
   const data = axiosBaseURL.get(`/api/v1/single-information-category/${slug}`);
   return data;
}

export const FetchDataAttraction = () => {
   const data = axiosBaseURL.get(`/api/v1/all-major-tourist-attraction`);
   return data;
 };




