var $j=jQuery.noConflict();$j(function(){var $jfilter;var $jcontainer;var $jcontainerClone;var $jfilterLink;var $jfilteredItems
$jfilter=$j('.pf-filter li.active a').attr('class');$jfilterLink=$j('.pf-filter li a');$jcontainer=$j('ul.filterable-grid');$jcontainerClone=$jcontainer.clone();$jfilterLink.click(function(e){$j('.pf-filter li').removeClass('active');$jfilter=$j(this).attr('class').split(' ');$j(this).parent().addClass('active');if($jfilter=='all'){$jfilteredItems=$jcontainerClone.find('li')}else{$jfilteredItems=$jcontainerClone.find('li[data-type~='+$jfilter+']')}
$jcontainer.quicksand($jfilteredItems,{duration:750,easing:'easeInOutCirc',adjustHeight:'dynamic'})})})