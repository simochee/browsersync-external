const gulp = require('gulp');
const browserSync = require('browser-sync');
const qr = require('qrcode-terminal');

gulp.task('browser-sync', () => {
    const instance = browserSync.init({
        server: 'app',
        open: true,
        notify: true,
        ghostMode: false,
        port: 8080
    }, () => {
        let url = instance.getOption('urls').get('external');
        qr.generate(url);
    });
});

gulp.task('reload', () => {
    return browserSync.reload();
});

gulp.task('default', ['browser-sync'], () => {
    gulp.watch('app/**/*', ['reload']);
});