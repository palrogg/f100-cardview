# Trombines forum des 100

## Embed pymjs

Au lieu d’utiliser une `iframe`:

```
<div id="pym_embed_f100">
</div>

<script type="text/javascript">
	window.addEventListener("DOMContentLoaded", function(){
		var pymParent = new pym.Parent("pym_embed_f100", "https://labs.letemps.ch/forum-des-100/trombines-2019/", {});
	}, false );
</script>
```
