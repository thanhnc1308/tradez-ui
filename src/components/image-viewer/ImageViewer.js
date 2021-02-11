/**
 * class handle for viewing dialog stock
 */
import DialogUtil from '@/common/dialogUtil'
import DialogImageViewer from '@/components/image-viewer/DialogImageViewer.vue'

class ImageViewer {
    show(options) {
        DialogUtil.showDialog(DialogImageViewer, options);
    }
}

export default new ImageViewer();
