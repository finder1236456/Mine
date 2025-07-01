const system = uni.getSystemInfoSync();
export const getStatusBarHeight = ()=>system.statusBarHeight || 0;

export const getTitleBarHeight = ()=>{
	if(uni.getMenuButtonBoundingClientRect){
		let {top,height} = uni.getMenuButtonBoundingClientRect();
		return height + (top - getStatusBarHeight())*2
	}else{
		return 40;
	}
}

	
export const getNavBarHeight = ()=>getStatusBarHeight()+getTitleBarHeight();