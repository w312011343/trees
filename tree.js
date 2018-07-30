Tree.prototype = {
	createTree:function($container){
		var data = this.data;
		this.createIterator(data,$container,0);
		
	},
	createIterator:function(data,$container,index){
		var self = this;
		if (data && data.length) {
			for(var i = 0;i<data.length;i++){
				var val = data[i];
				var $item = $(`
				<div class="treeItem treeHeightLine" level_index = "${index}">
						<div class='itemTitle'>
							<div class="itemControl itemShow itemIcon"></div>
							<div class='titleContent'>
								<div class="itemLevelTitle"></div>
								<div class="subTitleCont hide">
									<div class="itemLevelSubTitle"></div>
									<image class='subTitleImg'></image>
								</div>
								
							</div>
						</div>
						<div class="treeLevlCont hide"></div>
					</div>
				`);
				var $treeLevelTitle = $item.find('.itemLevelTitle');
				var $treeLevlCont = $item.find('.treeLevlCont');
				var $itemCheck = $item.find('.itemCheck');
				var $itemControl = $item.find('.itemControl');
				var $subTitleCont = $item.find('.subTitleCont');
				if(val.subTitle){
					$subTitleCont.removeClass('hide');
					$subTitleCont.find('.itemLevelSubTitle').text(val.subTitle);
					val.subImg?$subTitleCont.find('.subTitleImg').attr('src',val.subImg):$subTitleCont.find('.subTitleImg').addClass('hide');
				}
				if (data.length === 1 || (data.length >1 && i === data.length - 1)) {
					$item.removeClass('treeHeightLine').addClass('levelLastItem');
				}
				$item.appendTo($container);
				$treeLevelTitle.text(val.title);
				if (val.datas&& val.datas.length) {
					var flag = index+1;
					self.createIterator(val.datas,$treeLevlCont,flag)
				}else{
					$item.addClass('levelNochild');
					$itemControl.addClass('itemHide').removeClass('itemShow');
				}
			}

				
		}
	
	}
}
function Tree(data){
	this.data = data;
}

