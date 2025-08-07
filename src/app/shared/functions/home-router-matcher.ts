import { UrlSegment } from '@angular/router';

export function homeMatcher(
  segments: UrlSegment[]
): { consumed: UrlSegment[]; posParams?: Record<string, UrlSegment> } | null {
  if (segments.length === 0) {
    return { consumed: [] };
  }
  if (segments.length === 1) {
    return {
      consumed: segments,
      posParams: { project: segments[0] },
    };
  }
  return null;
}
