import {request} from '@/utils/request.js'

export function apiGetBanner(){
	return request({url:"/homeBanner"})
}

export function apiGetRandom(){
	return request({url:"/randomWall"})
}

export function apiGetClassify(){
	return request({url:"/classify"})
}

export function apiGetClassList(){
	return request({url:"/wallList"})
}