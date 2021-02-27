/**
 * class handle for viewing dialog stock
 */
import DialogUtil from '@/common/DialogUtil'
import DialogImageViewer from '@/components/image-viewer/DialogImageViewer.vue'

class ImageViewer {
    show(options) {
        if (!this.dialog) {
            this.dialog = DialogUtil.prepareDialog(DialogImageViewer);
        }
        DialogUtil.showDialog(this.dialog, options);
    }
}

export default new ImageViewer();
