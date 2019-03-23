import qq from 'qq'

const geolocation = new qq.maps.Geolocation("2SHBZ-DDUCO-N75WO-SHEAB-4FVPF-WLFIW", "zs_app")

function getMyLocation () {
  return new Promise((resolve, reject) => {
    geolocation.getLocation(function (res) {
      resolve(new qq.maps.LatLng(res.lat, res.lng))
    }, () => {
      reject('get location fail')
    }, {}, true)
  })
}

function nearbySearch({ key, latlng }) {
  return new Promise((resolve, reject) => {
    var searchService = new qq.maps.SearchService({
      complete (res) {
        resolve(res.detail.pois)
      }, 
      error () {
        reject('search error')
      },
      pageCapacity: 30
    })
    if (latlng) {
      searchService.searchNearBy(key, latlng, 1)
      // searchService.searchNearBy(key, new qq.maps.LatLng(24.38929, 118.071564), 1)
    } else {
      geolocation.getLocation(function (res) {
        searchService.searchNearBy(key, new qq.maps.LatLng(res.lat, res.lng), 1)
        // searchService.searchNearBy(key, new qq.maps.LatLng(24.38929, 118.071564), 1)
      })
    }
  })
}

export {
  nearbySearch,
  getMyLocation
}