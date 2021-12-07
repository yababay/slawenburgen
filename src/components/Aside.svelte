<script>
    import showdown from 'showdown'

    const converter = new showdown.Converter()

    const fetched = fetch(`content/index.md`)
        .then(res => res.text())
        .then(txt => {
            const arr = txt.split('\n')
            const uls = [
                arr.filter(el => el.indexOf('by-land') < 0),
                arr.filter(el => el.indexOf('by-land') >= 0)
            ]
            return uls.map(el => 
                converter.makeHtml(el.join('\n'))
                    .replace(/<ul/gm, '<ul class="nav flex-column"')
                    .replace(/<li/gm, '<li class="nav-item"')
                    .replace(/<a/gm, '<a class="nav-link link-secondary"')
            )
        })

</script>

{#await fetched}
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
{:then markup}
    <div class="position-sticky pt-3">
        <h5>Славяне в Германии</h5>
        {@html markup[0]}
        <h5>По землям ФРГ</h5>
        {@html markup[1]}
    </div>
{:catch error}
    <div class="alert alert-danger text-center" role="alert">
      Ошибка при загрузке контента.
    </div>
{/await}
